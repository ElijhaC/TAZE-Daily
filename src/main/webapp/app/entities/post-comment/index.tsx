import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import PostComment from './post-comment';
import PostCommentDetail from './post-comment-detail';
import PostCommentUpdate from './post-comment-update';
import PostCommentDeleteDialog from './post-comment-delete-dialog';

const PostCommentRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<PostComment />} />
    <Route path="new" element={<PostCommentUpdate />} />
    <Route path=":id">
      <Route index element={<PostCommentDetail />} />
      <Route path="edit" element={<PostCommentUpdate />} />
      <Route path="delete" element={<PostCommentDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default PostCommentRoutes;
