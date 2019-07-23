import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { UserController } from './user/user.controller';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EmpleadosModule } from './empleados/empleados.module';

@Module({
  imports: [UsuariosModule, EmpleadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
