/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($messageChannelId: String) {
    onCreateMessage(messageChannelId: $messageChannelId) {
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
        image
        avatar
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
export const onCreateGroupMessage = /* GraphQL */ `
  subscription OnCreateGroupMessage($groupMessageGroupId: String) {
    onCreateGroupMessage(groupMessageGroupId: $groupMessageGroupId) {
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
        image
        avatar
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
        name
        description
        members {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        media
        avatar
        updatedAt
      }
      groupMessageGroupId
      messageUserName
      createdAt
      updatedAt
    }
  }
`;
export const onUserMutation = /* GraphQL */ `
  subscription OnUserMutation($name: String) {
    onUserMutation(name: $name) {
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
      image
      avatar
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
          groupMessageGroupId
          messageUserName
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
export const onFriendMutation = /* GraphQL */ `
  subscription OnFriendMutation($friendFriendId: String) {
    onFriendMutation(friendFriendId: $friendFriendId) {
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
        image
        avatar
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
      image
      avatar
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
          groupMessageGroupId
          messageUserName
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
      image
      avatar
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
          groupMessageGroupId
          messageUserName
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
      image
      avatar
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
          groupMessageGroupId
          messageUserName
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
export const onCreateUserGroup = /* GraphQL */ `
  subscription OnCreateUserGroup {
    onCreateUserGroup {
      id
      groupID
      memberID
      group {
        id
        name
        description
        members {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        media
        avatar
        updatedAt
      }
      member {
        id
        name
        email
        userId
        phone
        aboutMe
        groups {
          nextToken
        }
        image
        avatar
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserGroup = /* GraphQL */ `
  subscription OnUpdateUserGroup {
    onUpdateUserGroup {
      id
      groupID
      memberID
      group {
        id
        name
        description
        members {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        media
        avatar
        updatedAt
      }
      member {
        id
        name
        email
        userId
        phone
        aboutMe
        groups {
          nextToken
        }
        image
        avatar
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserGroup = /* GraphQL */ `
  subscription OnDeleteUserGroup {
    onDeleteUserGroup {
      id
      groupID
      memberID
      group {
        id
        name
        description
        members {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        media
        avatar
        updatedAt
      }
      member {
        id
        name
        email
        userId
        phone
        aboutMe
        groups {
          nextToken
        }
        image
        avatar
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
      id
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
      messages {
        items {
          id
          text
          media
          avatar
          groupMessageGroupId
          messageUserName
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
      id
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
      messages {
        items {
          id
          text
          media
          avatar
          groupMessageGroupId
          messageUserName
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
      id
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
      messages {
        items {
          id
          text
          media
          avatar
          groupMessageGroupId
          messageUserName
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
export const onCreateFriend = /* GraphQL */ `
  subscription OnCreateFriend {
    onCreateFriend {
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
        image
        avatar
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
export const onUpdateFriend = /* GraphQL */ `
  subscription OnUpdateFriend {
    onUpdateFriend {
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
        image
        avatar
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
export const onDeleteFriend = /* GraphQL */ `
  subscription OnDeleteFriend {
    onDeleteFriend {
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
        image
        avatar
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
export const onCreateChannel = /* GraphQL */ `
  subscription OnCreateChannel {
    onCreateChannel {
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
export const onUpdateChannel = /* GraphQL */ `
  subscription OnUpdateChannel {
    onUpdateChannel {
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
export const onDeleteChannel = /* GraphQL */ `
  subscription OnDeleteChannel {
    onDeleteChannel {
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
