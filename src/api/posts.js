// 학습노트 관련 API
import { posts } from './index';

// 학습노트 조회 api
function fetchPosts() {
  return posts.get('/');
}

// 학습노트 추가 api
function createPost(postData) {
  return posts.post('/', postData);
}

export { fetchPosts, createPost };