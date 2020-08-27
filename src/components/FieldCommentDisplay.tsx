/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React from "react";
import { FlexItem, Card, CardContent, Flex, AvatarUser, Text, IconButton, SpaceVertical, Menu, MenuDisclosure, MenuList, MenuItem, Icon } from "@looker/components";
import { FieldComments, UserData } from "./interfaces";

// @ts-ignore
const CustomCommentCard = styled(Card)`
  .show {
    visibility: hidden;
  }

  .hide {
    visibility: hidden;
  }

  &:hover .show{
    visibility: visible;
  }
`;

export const FieldCommentDisplay: React.FC<{
  authorData: UserData,
  comment: FieldComments,
  showDetails: ()=>string,
  toggleEdit: ()=>void,
  openDialog: ()=>void,
}> = ({
  authorData,
  comment,
  showDetails,
  toggleEdit,
  openDialog,
}) => {

  let timestamp = new Date(comment.timestamp);

  return (
    <CustomCommentCard>
      <CardContent>
        <FlexItem>
          <Flex pb="small">
            <FlexItem flexBasis="10%" pr="xsmall" pt="xxxsmall">
              <AvatarUser user={authorData} size="xsmall"/>
            </FlexItem>
            <FlexItem flexBasis="80%">
              <FlexItem>
                <Text fontSize="small" fontWeight="semiBold">
                  {authorData.display_name}
                </Text>
              </FlexItem>
              <FlexItem>
                <Text fontSize="xsmall" variant="secondary">
                  { timestamp.toLocaleString() }
                  { comment.edited ? " (edited)" : null }
                </Text>
              </FlexItem>
            </FlexItem>
            <FlexItem flexBasis="10%">
              <SpaceVertical align="end">
                <Menu>
                  <MenuDisclosure>
                    <IconButton icon="DotsVert" label="More Options" className={showDetails()} />
                  </MenuDisclosure>
                  <MenuList>
                    <MenuItem onClick={toggleEdit}><Icon name="Edit" />Edit Comment</MenuItem>
                    <MenuItem onClick={openDialog}><Icon name="Trash" />Delete Comment</MenuItem>
                  </MenuList>
                </Menu>
              </SpaceVertical>
            </FlexItem>
          </Flex> 
          <Text fontSize="small">
            {comment.content}
          </Text>
        </FlexItem>
      </CardContent>
    </CustomCommentCard>
  );
};
