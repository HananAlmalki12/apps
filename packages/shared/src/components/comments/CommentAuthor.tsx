import React, { ReactElement } from 'react';
import { Author } from '../../graphql/comments';
import { ProfileLink } from '../profile/ProfileLink';
import FeatherIcon from '../../../icons/feather.svg';

export interface CommentAuthorProps {
  postAuthorId: string | null;
  author: Author;
}

export default function CommentAuthor({
  postAuthorId,
  author,
}: CommentAuthorProps): ReactElement {
  return (
    <ProfileLink
      user={author}
      className="overflow-hidden font-bold whitespace-nowrap commentAuthor text-theme-label-primary typo-callout"
    >
      {author.name}
      {author.id === postAuthorId && (
        <span className="flex items-center ml-2 text-theme-status-help typo-footnote">
          <FeatherIcon className="ml-1 text-base icon" />
          Author
        </span>
      )}
    </ProfileLink>
  );
}
