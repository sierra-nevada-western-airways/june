export const BaseLabel: React.FC<BaseLabelProperties> = ({
  labelClass,
  id,
  text,
}) => {
  return (
    <label className={labelClass} htmlFor={id}>
      {text}
    </label>
  );
};

interface BaseLabelProperties {
  labelClass?: string;
  id: string;
  text: string;
}
