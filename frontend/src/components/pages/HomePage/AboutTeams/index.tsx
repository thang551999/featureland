import ScrollWhenClick from '@/components/ScrollWhenClick';
import Member from './Member';

export default function AboutTeams() {
  const listOfMembers = [
    {
      name: `Member's name`,
      image:
        'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=824',
      position: 'Position',
    },
    {
      name: `Member's name`,
      image:
        'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=824',
      position: 'Position',
    },
    {
      name: `Member's name`,
      image:
        'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=824',
      position: 'Position',
    },
    {
      name: `Member's name`,
      image:
        'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=824',
      position: 'Position',
    },
    {
      name: `Member's name`,
      image:
        'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=824',
      position: 'Position',
    },
    {
      name: `Member's name`,
      image:
        'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=824',
      position: 'Position',
    },
  ];
  return (
    <div className="discover-areas about-team">
      <div className="about-team-title">Get ready for our teams</div>
      <div className="areas">
        <ScrollWhenClick
          gap={24}
          // justifyContent={width >= 1847 ? 'space-around' : 'start'}
        >
          {listOfMembers.map((member, index) => (
            <Member {...member} key={index} />
          ))}
        </ScrollWhenClick>
      </div>
    </div>
  );
}
