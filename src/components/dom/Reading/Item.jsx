import { Tooltip } from 'antd';
import stores from '@/stores';

const Item = ({ data }) => {
  const theme = stores.useConfig((state) => state.theme);

  return (
    <div className='card'>
      <div className='header'>
        <span className='title'>{data.title}</span>
        <span className='type'>{data.type.join(' | ')}</span>
      </div>
      <div className='description'>{data.description}</div>
      <div className='context'>{data.context}</div>
      <div className='links'>{data.links}</div>
      <div className='tech'>
        {data.tech.map((tech, i) => (
          <Tooltip title={tech.name} key={i} className='tech-item'>
            <a href={tech.link} target='_blank' rel='noreferrer'>
              <img
                src={`/img/tech/${theme}/${tech.id}.svg`}
                alt={tech.name}
                height={30}
              />
            </a>
          </Tooltip>
        ))}
      </div>
      <div className='date'>{data.date}</div>
    </div>
  );
};

export default Item;
