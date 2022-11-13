import { Injectable } from '@nestjs/common';
import { Post, PostDocument } from '../schemas/post.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SavePostDto } from './dto/save-post.dto';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  list() {
    return this.postModel.find({});
  }

  async save(post: SavePostDto) {
    const doc = await this.postModel.create({
      content: post.content,
    });

    return {
      id: doc.id,
    };
  }

  delete() {}

  get(id: string) {}
}
