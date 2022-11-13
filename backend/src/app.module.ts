import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';

const MONGODB_URI = 'MONGODB_URI';

@Module({
  imports: [PostModule, MongooseModule.forRoot(MONGODB_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
