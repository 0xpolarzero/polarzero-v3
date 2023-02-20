import { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Divider, Dropdown } from 'antd';
import { AiOutlineMenu } from 'react-icons/ai';
import { CiLight, CiDark } from 'react-icons/ci';
import { RxPlay, RxSpeakerLoud, RxSpeakerOff } from 'react-icons/rx';
import stores from '@/stores';
import config from '@/data';
import hooks from '@/hooks';

const Nav = () => {
  const { theme, updateTheme, language, toggleLanguage, hideControls } =
    stores.useConfig((state) => ({
      theme: state.theme,
      updateTheme: state.updateTheme,
      language: state.language,
      toggleLanguage: state.toggleLanguage,
      hideControls: state.hideControls,
    }));
  const { init, started, audioOff, toggleMute } = stores.useAudio((state) => ({
    init: state.init,
    started: state.started,
    audioOff: state.suspended,
    toggleMute: state.toggleMute,
  }));

  return (
    <header className={`nav ${hideControls ? 'hidden' : ''}`}>
      <div className='title'>{/* <a>polarzero</a> */}</div>

      <div className='links'>
        <Links />
        {/* Icons */}
        {theme === 'dark' ? (
          <CiDark size={20} onClick={() => updateTheme('light')} />
        ) : (
          <CiLight size={20} onClick={() => updateTheme('dark')} />
        )}
        <Divider type='vertical' />
        {started ? (
          audioOff ? (
            <RxSpeakerOff size={20} onClick={toggleMute} />
          ) : (
            <RxSpeakerLoud size={20} onClick={toggleMute} />
          )
        ) : (
          <RxPlay size={20} onClick={init} />
        )}
        <Divider type='vertical' />
        <div className='language'>
          <a
            onClick={toggleLanguage}
            className={language === 'en' ? 'active' : ''}>
            EN
          </a>

          <a
            onClick={toggleLanguage}
            className={language === 'fr' ? 'active' : ''}>
            FR
          </a>
        </div>
      </div>
    </header>
  );
};

const Links = () => {
  const language = stores.useConfig((state) => state.language);
  const setActivePage = stores.useCounter((state) => state.setActivePage);
  const { isMobile } = hooks.useWindowSize();
  const router = useRouter();

  useEffect(() => {
    const index = config.nav['en'].findIndex(
      (item) => item === router.pathname.slice(1),
    );
    if (index !== -1) {
      const page = config.nav[language][index];
      setActivePage(page);
    }
  }, [router.pathname, setActivePage]);

  const items = [
    {
      key: '1',
      label: (
        <a
          onClick={() => router.push('/')}
          className={router.pathname === '/' ? 'active' : ''}>
          {config.nav[language][0]}
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a
          onClick={() => router.push('/education')}
          className={router.pathname === '/education' ? 'active' : ''}>
          {config.nav[language][1]}
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a
          onClick={() => router.push('/about')}
          className={router.pathname === '/about' ? 'active' : ''}>
          {config.nav[language][2]}
        </a>
      ),
    },
  ];

  if (isMobile)
    return (
      <>
        <Dropdown menu={{ items }} trigger={['click']} arrow>
          <a onClick={(e) => e.preventDefault()}>
            <AiOutlineMenu size={20} />
          </a>
        </Dropdown>
        <Divider type='vertical' />
      </>
    );

  return items.map((item) => (
    <Fragment key={item.key}>
      {item.label}
      <Divider type='vertical' />
    </Fragment>
  ));
};

export default Nav;
