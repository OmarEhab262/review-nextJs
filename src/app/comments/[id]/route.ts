import { NextRequest, NextResponse } from "next/server";
import { comments } from "../data";

// this git comment by id
// export async function GET(
//   _request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const comment = comments.find(
//     (comment) => comment.id === parseInt(params.id)
//   );
//   return Response.json(comment);
// }
// this update the comment by id
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;
  return Response.json(comments[index]);
}
// this delete the comment by id
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  // if u want return the deleted comment
  // const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json(comments);
}

// this get the comment by query

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  // Filter comments if the query exists
  const filteredComments = query
    ? comments.filter((comment) =>
        comment.text.toLowerCase().includes(query.toLowerCase())
      )
    : comments;

  // Return the filtered comments as JSON
  return NextResponse.json(filteredComments);
}
