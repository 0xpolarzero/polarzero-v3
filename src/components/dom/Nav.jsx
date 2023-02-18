import { Divider } from 'antd';
import { CiLight, CiDark } from 'react-icons/ci';
import { RxPlay, RxSpeakerLoud, RxSpeakerOff } from 'react-icons/rx';
import stores from '@/stores';
import config from '@/data';
import hooks from '@/hooks';

const Nav = () => {
  const { theme, updateTheme, language, toggleLanguage } = stores.useConfig(
    (state) => ({
      theme: state.theme,
      updateTheme: state.updateTheme,
      language: state.language,
      toggleLanguage: state.toggleLanguage,
    }),
  );
  const { init, started, audioOff, toggleMute } = stores.useAudio((state) => ({
    init: state.init,
    started: state.started,
    audioOff: state.suspended,
    toggleMute: state.toggleMute,
  }));
  const { isMobile } = hooks.useWindowSize();

  return (
    <header className='nav'>
      <div className='title'>{/* <a>polarzero</a> */}</div>

      <div className='links'>
        {isMobile ? (
          'a'
        ) : (
          <>
            <a>{config.nav[language][0]}</a>
            <Divider type='vertical' />
            <a>{config.nav[language][1]}</a>
            <Divider type='vertical' />
            <a>{config.nav[language][2]}</a>
          </>
        )}
        <Divider type='vertical' />
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
            <img src='/images/flag-us.svg' height={20} alt='US flag' />
          </a>

          <a
            onClick={toggleLanguage}
            className={language === 'fr' ? 'active' : ''}>
            <img src='/images/flag-fr.svg' height={20} alt='French flag' />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
