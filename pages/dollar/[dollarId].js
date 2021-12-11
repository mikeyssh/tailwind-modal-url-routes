import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import Dollar from '../../components/Dollar';
import { data } from '../../components/Grid';

Modal.setAppElement('#__next');

const DollarsPage = ({ dollarId }) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Modal
        isOpen={true} // The modal should always be shown on page load, it is the 'page'
        onRequestClose={() => router.push('/')}
        contentLabel="Post modal"
      >
        <Dollar id={dollarId} pathname={router.pathname} />
      </Modal>
    </>
  );
};

export default DollarsPage;

export function getStaticProps({ params: { dollarId } }) {
  return { props: { dollarId: dollarId } };
}

export function getStaticPaths() {
  return {
    paths: data.map((dollarId) => ({
      params: { dollarId: dollarId.toString() },
    })),
    fallback: false,
  };
}
