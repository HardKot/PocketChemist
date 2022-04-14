import React, { useReducer, useImperativeHandle, forwardRef } from "react";
import { TextInput } from "react-native";

import type {} from "react";
import type { TextInputProps } from "react-native";

interface ReactionInputProps extends TextInputProps {}
interface ReactionInputRef {}

interface ReactionInputState {}

type ReactionInputAction = { type: any; payload: any };
const initState: ReactionInputState = {};

function ReactionInputReducer(
  state: ReactionInputState,
  { type, payload }: ReactionInputAction
): ReactionInputState {
  return state;
}

const ReactionInput = forwardRef<ReactionInputRef, ReactionInputProps>(
  (props, ref) => {
    const {} = props;
    const [state, dispatch] = useReducer(ReactionInputReducer, initState);
    return <TextInput {...props} />;
  }
);

export default ReactionInput;
