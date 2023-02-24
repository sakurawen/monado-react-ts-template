import { useTranslation } from 'react-i18next';

const Translate = ({ transKey }: { transKey: string }) => {
  const { t } = useTranslation();
  return <span>{t(transKey)}</span>;
};

export default Translate;
