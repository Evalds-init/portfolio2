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
export const onCreateGroupMessage = /* GraphQL */ `
  subscription OnCreateGroupMessage($groupMessageGroupId: ID) {
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
export const onCreateUserGroup = /* GraphQL */ `
  subscription OnCreateUserGroup {
    onCreateUserGroup {
      id
      groupID
      memberID
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
      createdAt
      updatedAt
    }
  }
`;
