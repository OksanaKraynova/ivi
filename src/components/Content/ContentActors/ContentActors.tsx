import { FC } from "react";
import { IContent } from "@/types/IContent";
import { LinkAvatar } from "@/src/components/LinkAvatar/LinkAvatar";
import { Urls } from "@/types/Urls";

interface ContentActorsProps {
    content: IContent;
}

export const ContentActors: FC<ContentActorsProps> = (props) => {

    const color = +props.content.rating < 7 ? "grey" : "green";
    const fileUrl = Urls.SERVER_URL + ":" + Urls.FILES_PORT;

    return (<><LinkAvatar
        textUnderImg={["Рейтинг", "Иви"]}
        textInsteadImg={props.content.rating.toString()}
        href={`/watch/${props.content.id}`}
        img=""
        form="square"
        color={color}
    />

        {props.content.creators
            .find(creators => creators.job === "Актер")?.persons
            ?.map((actor, index) => {
                if (index > 4) return;
                return (
                    <LinkAvatar
                        key={index}
                        textUnderImg={actor.name.split(" ")}
                        href=""
                        img={
                            actor.photo.length > 0 ?
                                fileUrl + actor.photo[0].file_path :
                                ""
                        }
                        form="square"
                    />
                );
            })}
    </>
    );
};
