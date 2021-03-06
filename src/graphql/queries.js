/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($name: String!) {
    getUser(name: $name) {
      id
      name
      email
      userId
      phone
      aboutMe
      groups {
        items {
          id
          groupID
          memberID
          createdAt
          updatedAt
        }
        nextToken
      }
      ownedGroups {
        items {
          id
          owner
          name
          description
          createdAt
          media
          avatar
          updatedAt
        }
        nextToken
      }
      image
      userAvatar
      friends {
        items {
          id
          name
          friendImage
          requester
          friendFriendId
          friendChannelId
          request
          blocked
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          text
          media
          avatar
          messageChannelId
          messageUserName
          createdAt
          updatedAt
        }
        nextToken
      }
      groupMessages {
        items {
          id
          text
          media
          avatar
          messageUserName
          groupMessageGroupId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $name: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        email
        userId
        phone
        aboutMe
        groups {
          nextToken
        }
        ownedGroups {
          nextToken
        }
        image
        userAvatar
        friends {
          nextToken
        }
        messages {
          nextToken
        }
        groupMessages {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroupMessage = /* GraphQL */ `
  query GetGroupMessage($id: ID!) {
    getGroupMessage(id: $id) {
      id
      text
      user {
        id
        name
        email
        userId
        phone
        aboutMe
        groups {
          nextToken
        }
        ownedGroups {
          nextToken
        }
        image
        userAvatar
        friends {
          nextToken
        }
        messages {
          nextToken
        }
        groupMessages {
          nextToken
        }
        createdAt
        updatedAt
      }
      media
      avatar
      group {
        id
        groupOwner {
          id
          name
          email
          userId
          phone
          aboutMe
          image
          userAvatar
          createdAt
          updatedAt
        }
        owner
        name
        description
        members {
          nextToken
        }
        groupMessages {
          nextToken
        }
        createdAt
        media
        avatar
        updatedAt
      }
      messageUserName
      groupMessageGroupId
      createdAt
      updatedAt
    }
  }
`;
export const listGroupMessages = /* GraphQL */ `
  query ListGroupMessages(
    $filter: ModelGroupMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        user {
          id
          name
          email
          userId
          phone
          aboutMe
          image
          userAvatar
          createdAt
          updatedAt
        }
        media
        avatar
        group {
          id
          owner
          name
          description
          createdAt
          media
          avatar
          updatedAt
        }
        messageUserName
        groupMessageGroupId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      groupOwner {
        id
        name
        email
        userId
        phone
        aboutMe
        groups {
          nextToken
        }
        ownedGroups {
          nextToken
        }
        image
        userAvatar
        friends {
          nextToken
        }
        messages {
          nextToken
        }
        groupMessages {
          nextToken
        }
        createdAt
        updatedAt
      }
      owner
      name
      description
      members {
        items {
          id
          groupID
          memberID
          createdAt
          updatedAt
        }
        nextToken
      }
      groupMessages {
        items {
          id
          text
          media
          avatar
          messageUserName
          groupMessageGroupId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      media
      avatar
      updatedAt
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupOwner {
          id
          name
          email
          userId
          phone
          aboutMe
          image
          userAvatar
          createdAt
          updatedAt
        }
        owner
        name
        description
        members {
          nextToken
        }
        groupMessages {
          nextToken
        }
        createdAt
        media
        avatar
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFriend = /* GraphQL */ `
  query GetFriend($id: ID!) {
    getFriend(id: $id) {
      id
      name
      friendImage
      requester
      friend {
        id
        name
        email
        userId
        phone
        aboutMe
        groups {
          nextToken
        }
        ownedGroups {
          nextToken
        }
        image
        userAvatar
        friends {
          nextToken
        }
        messages {
          nextToken
        }
        groupMessages {
          nextToken
        }
        createdAt
        updatedAt
      }
      friendFriendId
      friendChannelId
      channel {
        id
        name
        description
        friends {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        image
        updatedAt
      }
      request
      blocked
      createdAt
      updatedAt
    }
  }
`;
export const listFriends = /* GraphQL */ `
  query ListFriends(
    $filter: ModelFriendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        friendImage
        requester
        friend {
          id
          name
          email
          userId
          phone
          aboutMe
          image
          userAvatar
          createdAt
          updatedAt
        }
        friendFriendId
        friendChannelId
        channel {
          id
          name
          description
          createdAt
          image
          updatedAt
        }
        request
        blocked
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      text
      user {
        id
        name
        email
        userId
        phone
        aboutMe
        groups {
          nextToken
        }
        ownedGroups {
          nextToken
        }
        image
        userAvatar
        friends {
          nextToken
        }
        messages {
          nextToken
        }
        groupMessages {
          nextToken
        }
        createdAt
        updatedAt
      }
      media
      avatar
      channel {
        id
        name
        description
        friends {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        image
        updatedAt
      }
      messageChannelId
      messageUserName
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        user {
          id
          name
          email
          userId
          phone
          aboutMe
          image
          userAvatar
          createdAt
          updatedAt
        }
        media
        avatar
        channel {
          id
          name
          description
          createdAt
          image
          updatedAt
        }
        messageChannelId
        messageUserName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChannel = /* GraphQL */ `
  query GetChannel($id: ID!) {
    getChannel(id: $id) {
      id
      name
      description
      friends {
        items {
          id
          name
          friendImage
          requester
          friendFriendId
          friendChannelId
          request
          blocked
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          text
          media
          avatar
          messageChannelId
          messageUserName
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      image
      updatedAt
    }
  }
`;
export const listChannels = /* GraphQL */ `
  query ListChannels(
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        friends {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        image
        updatedAt
      }
      nextToken
    }
  }
`;
export const byGroupName = /* GraphQL */ `
  query ByGroupName(
    $name: String
    $sortDirection: ModelSortDirection
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byGroupName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupOwner {
          id
          name
          email
          userId
          phone
          aboutMe
          image
          userAvatar
          createdAt
          updatedAt
        }
        owner
        name
        description
        members {
          nextToken
        }
        groupMessages {
          nextToken
        }
        createdAt
        media
        avatar
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: SearchableUserSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        name
        email
        userId
        phone
        aboutMe
        groups {
          nextToken
        }
        ownedGroups {
          nextToken
        }
        image
        userAvatar
        friends {
          nextToken
        }
        messages {
          nextToken
        }
        groupMessages {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
