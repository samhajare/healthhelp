import { SetMetadata } from '@nestjs/common';

/**
 * Custom Repository Decorator
 * Used to mark a class as a custom repository for TypeORM.
 * @param entity The entity that this repository manages.
 */
export const CUSTOM_REPOSITORY = 'CUSTOM_REPOSITORY';

export function CustomRepository(entity: Function): ClassDecorator {
  return SetMetadata(CUSTOM_REPOSITORY, entity);
}
