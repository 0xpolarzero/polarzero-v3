import { Divider } from 'antd';
import { CiLight, CiDark } from 'react-icons/ci';
import { RxPlay, RxSpeakerLoud, RxSpeakerOff } from 'react-icons/rx';
import stores from '@/stores';

const Nav = () => {
  const { theme, updateTheme } = stores.useConfig((state) => ({
    theme: state.theme,
    updateTheme: state.updateTheme,
  }));
  const { init, started, audioOff, toggleMute } = stores.useAudio((state) => ({
    init: state.init,
    started: state.started,
    audioOff: state.suspended,
    toggleMute: state.toggleMute,
  }));

  return (
    <header className='nav'>
      <div className='title'>{/* <a>polarzero</a> */}</div>

      <div className='links'>
        <a>work</a>
        <Divider type='vertical' />
        <a>contact</a>
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
      </div>
    </header>
  );
};

export default Nav;
