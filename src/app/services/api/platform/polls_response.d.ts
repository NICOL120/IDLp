/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type PollExecuteMsg = {
  execute: {
    contract: string;
    msg: string;
    [k: string]: unknown;
  };
};
export type PollStatus = "in_progress" | "passed" | "rejected" | "executed" | "expired";

export interface PollsResponse {
  polls: PollInfo[];
  [k: string]: unknown;
}
export interface PollInfo {
  creator: string;
  description: string;
  end_height: number;
  execute_msgs: PollExecuteMsg[];
  id: number;
  link?: string | null;
  no_votes: number;
  status: PollStatus;
  title: string;
  total_balance_at_end_poll?: number | null;
  yes_votes: number;
  [k: string]: unknown;
}