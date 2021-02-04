/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserGroup = /* GraphQL */ `
  mutation CreateUserGroup(
    $input: CreateUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    createUserGroup(input: $input, condition: $condition) {
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
export const updateUserGroup = /* GraphQL */ `
  mutation UpdateUserGroup(
    $input: UpdateUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    updateUserGroup(input: $input, condition: $condition) {
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
export const deleteUserGroup = /* GraphQL */ `
  mutation DeleteUserGroup(
    $input: DeleteUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    deleteUserGroup(input: $input, condition: $condition) {
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
export const createGroupMessage = /* GraphQL */ `
  mutation CreateGroupMessage(
    $input: CreateGroupMessageInput!
    $condition: ModelGroupMessageConditionInput
  ) {
    createGroupMessage(input: $input, condition: $condition) {
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
export const updateGroupMessage = /* GraphQL */ `
  mutation UpdateGroupMessage(
    $input: UpdateGroupMessageInput!
    $condition: ModelGroupMessageConditionInput
  ) {
    updateGroupMessage(input: $input, condition: $condition) {
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
export const deleteGroupMessage = /* GraphQL */ `
  mutation DeleteGroupMessage(
    $input: DeleteGroupMessageInput!
    $condition: ModelGroupMessageConditionInput
  ) {
    deleteGroupMessage(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createFriend = /* GraphQL */ `
  mutation CreateFriend(
    $input: CreateFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    createFriend(input: $input, condition: $condition) {
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
export const updateFriend = /* GraphQL */ `
  mutation UpdateFriend(
    $input: UpdateFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    updateFriend(input: $input, condition: $condition) {
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
export const deleteFriend = /* GraphQL */ `
  mutation DeleteFriend(
    $input: DeleteFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    deleteFriend(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createChannel = /* GraphQL */ `
  mutation CreateChannel(
    $input: CreateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    createChannel(input: $input, condition: $condition) {
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
export const updateChannel = /* GraphQL */ `
  mutation UpdateChannel(
    $input: UpdateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    updateChannel(input: $input, condition: $condition) {
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
export const deleteChannel = /* GraphQL */ `
  mutation DeleteChannel(
    $input: DeleteChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    deleteChannel(input: $input, condition: $condition) {
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
