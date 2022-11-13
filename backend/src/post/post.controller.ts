import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SavePostDto } from './dto/save-post.dto';
import { PostService } from './post.service';

// Contenxt Path
@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  /**
   * 게시글 목록
   *
   * GET /post
   */
  @Get()
  list() {
    return this.postService.list();
  }

  /**
   * 추가
   *
   * POST /post
   */
  @Post()
  save(@Body() body: SavePostDto) {
    console.log('body', body);
    return this.postService.save(body);
  }

  /**
   * 삭제
   *
   * DELETE /post
   */
  @Delete()
  delete() {
    return this.postService.delete();
  }

  /**
   * 상세정보
   *
   * GET /post/:id
   */
  @Get(':id')
  get(@Param('id') id: string) {
    return this.postService.get(id);
  }
}
