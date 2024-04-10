import { Header as HeaderV1 } from './desktop/v1';
import { Header as HeaderV2 } from './desktop/v2';
import { MobileHeader } from './mobile';

interface MainHeaderProps {
  version?: '1' | '2';
}

export function MainHeader({ version = '2' }: MainHeaderProps) {
  return (
    <>
      {version === '1' && <HeaderV1 />}
      {version === '2' && <HeaderV2 />}
      <MobileHeader />
    </>
  );
}
