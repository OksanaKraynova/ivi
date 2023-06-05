import IActor from "./IActor";

export default interface IJob {
  job: string,
  persons: IActor[]
}