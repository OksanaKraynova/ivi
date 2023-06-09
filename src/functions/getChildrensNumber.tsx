import IComment from "@/types/IComment";
import getData from "./getData";
import Urls from "@/types/Urls";
import IData from "@/types/IData";

export default function getChildrensNumber(id: number): number {

  let childrens = 0;

  getData<IData<IComment[]>>(Urls.SERVER_PORT, Urls.ALL_COMMENTS, { parent: id })
    .then(data => {

      if (data.count > 0) {
        childrens += data.count;

        for (let comment of data.items)
          childrens += getChildrensNumber(comment.id);
      }

    });

  return childrens;
}