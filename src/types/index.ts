export default interface Res<content = {}> extends Response {
  message: string;
  success: boolean;
  content: content;
}
