import IContent from "@/types/IContent";
import LinkAvatar from "@/src/components/LinkAvatar/LinkAvatar";
import Urls from "@/types/Urls";

interface ContentActorsProps {
    content: IContent;
}

export default function ContentActors(props: ContentActorsProps) {

    const color = props.content.rating !== null && props.content.rating !== undefined &&
        +props.content.rating < 7 ? "grey" : "green";
    const fileUrl = Urls.SERVER_URL + ":" + Urls.SERVER_PORT;

    return (<>
        <LinkAvatar
            textUnderImg={["Рейтинг", "Иви"]}
            textInsteadImg={props.content.rating ?? "?"}
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
                            actor.photo !== undefined && actor.photo.length > 0 ?
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
