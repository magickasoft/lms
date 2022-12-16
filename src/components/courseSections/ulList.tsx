import SC from '@emotion/styled';

const Text = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
`;

export const UlList = () => {
  return (
    <>
      <Text>
        If so, Brain Biohacking is the course for you. This course is for those who want:
        <ul>
          <li>To keep the mind always sharp and young.</li>
          <li>Have a perfect memory.</li>
          <li>Easy to learn languages, memorize a large amount of information.</li>
          <li>Avoid age-related diseases such as Alzheimer&apos;s or Parkinson&apos;s disease.</li>
          <li>Freely memorize dates, phone numbers, numbers, important events.</li>
          <li>It is easy to prepare and pass tests and exams for the highest score.</li>
          <li>Be cheerful and energetic, increase your efficiency.</li>
          <li>Cope more effectively with tasks at work and at home.</li>
          <li>Learn to easily analyze information, situations.</li>
          <li>Develop creativity and a non-standard approach to solving various issues.</li>
        </ul>
      </Text>
    </>
  );
};
