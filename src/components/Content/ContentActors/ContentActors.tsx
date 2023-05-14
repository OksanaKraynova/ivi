import { FC } from "react";
import { IContent } from "@/types/IContent";
import { LinkAvatar } from "@/src/components/LinkAvatar/LinkAvatar";
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
            <LinkAvatar
                textUnderImg={["Рейтинг", "Иви"]}
                textInsteadImg={props.content.rating.toString()}
                href={`/watch/${props.content.id}`}
                img=""
                form="square"
                color={color}
            />

            {props.content.actors.map((actorId, index) => {
                let actor = props.actors.find((actor) => actor.id === actorId);
                if (index > 4) return;
                if (actor !== undefined)
                    return (
                        <LinkAvatar
                            key={index}
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
