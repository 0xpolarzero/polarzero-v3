import { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { Tooltip } from 'antd';
import { AiOutlineFilePdf } from 'react-icons/ai';
import {
  SiEthereum,
  SiGithub,
  SiHashnode,
  SiMaildotru,
  SiTwitter,
} from 'react-icons/si';
import Entity from '../Entity';
import config from '@/data';
import stores from '@/stores';

const About = ({ type }) => {
  const { theme, language } = stores.useConfig((state) => ({
    theme: state.theme,
    language: state.language,
  }));
  const { width } = useThree((state) => state.viewport);
  const [content, setContent] = useState(config[type]);

  useEffect(() => {
    setContent(config[type]);
  }, [language]);

  return (
    <ScrollControls damping={6} pages={2}>
      <Entity type={type} />

      <Scroll html style={{ width: '100%' }}>
        <div className={`about ${width < 9.6 ? 'mobile' : 'desktop'}`}>
          <div className='wrapper'>
            <div className='card links'>
              <div className='socials'>
                <a
                  href='https://twitter.com/0xpolarzero'
                  target='_blank'
                  rel='noreferrer'>
                  <SiTwitter size={20} /> 0xpolarzero
                </a>
                <a
                  href='https://lenster.xyz/u/polarzero'
                  target='_blank'
                  rel='noreferrer'>
                  <img
                    src={`/img/tech/${theme}/lens.svg`}
                    alt='lens'
                    height={20}
                  />{' '}
                  polarzero.lens
                </a>
                <a
                  href='mailto:0xpolarzero@gmail.com'
                  target='_blank'
                  rel='noreferrer'>
                  <SiMaildotru size={20} /> 0xpolarzero@gmail.com
                </a>
              </div>
              <div className='others'>
                <a
                  href='https://github.com/0xpolarzero'
                  target='_blank'
                  rel='noreferrer'>
                  <SiGithub size={20} /> GitHub
                </a>
                <a
                  href='https://blog.polarzero.xyz'
                  target='_blank'
                  rel='noreferrer'>
                  <SiHashnode size={20} /> Hashnode
                </a>
                <a
                  href='https://opensea.io/accounts/polarzero'
                  target='_blank'
                  rel='noreferrer'>
                  <SiEthereum size={20} /> polarzero.eth
                </a>
              </div>
              <div className='resume'>
                <a
                  href='/docs/RESUME_EN_2023_feb.pdf'
                  target='_blank'
                  rel='noreferrer'>
                  <AiOutlineFilePdf size={20} />{' '}
                  {language === 'en' ? 'Resume' : 'CV'}
                </a>
              </div>
            </div>
            <div className='card articles'>
              {content.articles.map((article, index) => (
                <a
                  key={index}
                  href={article.link}
                  target='_blank'
                  rel='noreferrer'>
                  {article.icon}
                  <span>{article.date[language]}</span>
                  {width < 9.6 ? null : <span className='separator vertical' />}
                  <Tooltip
                    title={article.caption}
                    style={{ textAlign: 'justify' }}>
                    <span className='italic'>
                      {article.title}{' '}
                      <span style={{ opacity: 0.7 }}>({article.lang})</span>
                    </span>
                  </Tooltip>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Scroll>
    </ScrollControls>
  );
};

export default About;
