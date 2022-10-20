import mortyIcon from "../../assets/morty.png";

interface INotFound {
  title?: string;
  message?: string;
  titleClassName?: string;
  messageClassName?: string;
  className?: string;
  imageClassName?: string;
}

export const NotFound = ({
  title,
  message,
  titleClassName,
  messageClassName,
  className,
  imageClassName
}: INotFound) => {
  return (
    <div className={className}>
      <span className={titleClassName}>{title}</span>
      <span className={messageClassName}>{message}</span>
      <img src={mortyIcon} alt="" className={imageClassName}/>
    </div>
  );
};
