import { FC } from "react";
import { IContent } from "@/types/IContent";
import { AImage } from "@/src/components/AImage/AImage";
import { IActor } from "@/types/IActor";

interface ContentActorsProps {
    content: IContent;
    actors: IActor[];
}

export const ContentActors: FC<ContentActorsProps> = (props) => {
    let color: "green" | "grey";
    props.content.rating < 7 ? (color = "grey") : (color = "green");

    return (
        <>
            <AImage
                textUnderImg={["Рейтинг", "Иви"]}
                textInsteadImg={props.content.rating.toString()}
                href={`/watch/${props.content.id}`}
                img=""
                form="square"
                color={color}
            />

            {props.content.actors.map((actorId, index) => {
                let actor = props.actors.find((actor) => actor.id === actorId);
                if (index > 3) return;
                if (actor !== undefined)
                    return (
                        <AImage
                            textUnderImg={[actor.firstName, actor.secondName]}
                            href=""
                            img={actor.img}
                            form="square"
                        />
                    );
            })}
        </>
    );
};
