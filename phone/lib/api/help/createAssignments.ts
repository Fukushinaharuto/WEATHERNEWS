
import { api } from "../api";

export type CreateAssignmentsRequest = {
  help_request_id: number;
};


export function createAssignments({help_request_id}: CreateAssignmentsRequest) {
  return api("/help/assignments", {
    method: "POST",
    body: { help_request_id },
  });
}