import IContent from "@/types/IContent";
import LinkAvatar from "@/src/components/LinkAvatar/LinkAvatar";
import Urls from "@/types/Urls";
import ru from '@/locales/content/ru';
import en from '@/locales/content/en';

interface ContentActorsProps {
    content: IContent;
    locale?: string;
}

export default function ContentActors(props: ContentActorsProps) {

    const language = props.locale === "en" ? en : ru;

    const color = props.content.rating && +props.content.rating < 7 ? "grey" : "green";
    const fileUrl = Urls.SERVER_URL + ":" + Urls.FILES_PORT;

    return (<>
        <LinkAvatar
            textUnderImg={language.rating}
            textInsteadImg={props.content.rating ?? "?"}
            href={`/watch/${props.content.id}`}
            img=""
            form="square"
            color={color}
        />

        {
            props.content.creators &&
            props.content.creators
                .find(creators => creators.job === "Актер")?.persons
                ?.map((actor, index) => {
                    if (index > 4) return;
                    return (
                        <LinkAvatar
                            key={index}
                            textUnderImg={props.locale === "en" && actor.translate ? actor.translate : actor.name}
                            href=""
                            img={actor.photo && actor.photo.length > 0 ? fileUrl + actor.photo[0].file_path : ""}
                            form="square"
                        />
                    );
                })}
    </>
    );
};
