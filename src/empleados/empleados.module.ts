import { Module } from '@nestjs/common';
import { EmpleadoController } from './controllers/empleado/empleado.controller';

@Module({
  controllers: [EmpleadoController]
})
export class EmpleadosModule {}
