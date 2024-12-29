import { DynamicModule, Module, Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CUSTOM_REPOSITORY } from '../decorators/custom-repository.decorator';

@Module({})  // Marks this class as a NestJS module with no initial configurations
export class TypeOrmExModule {
  // Static method that takes an array of repository classes and returns a DynamicModule
  static forCustomRepository(repositories: Function[]): DynamicModule {
    // Maps each repository class to a NestJS provider configuration
    const providers: Provider[] = repositories.map((repository) => ({
      // Specifies what will be injected (the repository class itself)
      provide: repository,
      
      // Factory function that creates the repository instance
      useFactory: (dataSource: DataSource) => {
        // Gets the entity metadata attached by the @CustomRepository decorator
        const entity = Reflect.getMetadata(CUSTOM_REPOSITORY, repository);
        
        // Validates that the repository has the required decorator
        if (!entity) {
          throw new Error(
            `Missing @CustomRepository decorator on ${repository.name}`,
          );
        }
        
        // Creates a custom repository by extending the base repository with custom methods
        return dataSource.getRepository(entity).extend(repository.prototype);
      },
      
      // Specifies that this factory needs DataSource to be injected
      inject: [DataSource],
    }));

    // Returns the dynamic module configuration
    return {
      module: TypeOrmExModule,     // The module class itself
      providers: providers,         // The repository providers we created
      exports: providers,          // Makes the repositories available to other modules
    };
  }
}
