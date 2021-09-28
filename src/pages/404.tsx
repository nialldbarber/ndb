import {motion} from 'framer-motion';
import PageLayout from 'components/layouts/page';
import Wrapper from 'components/layouts/wrapper';
import Meta from 'components/helmet';
import {list} from 'utils/framer';

export default function Page404() {
  return (
    <>
      <Meta title="Page not found" />
      <Wrapper>
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={list}
          >
            <PageLayout title="dang...">
              <p>Page not found 😢</p>
            </PageLayout>
          </motion.div>
        </>
      </Wrapper>
    </>
  );
}
