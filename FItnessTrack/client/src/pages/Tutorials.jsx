import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 10px; /* Reduced gap between sections */
  @media (max-width: 600px) {
    gap: 8px;
  }
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* Space cards evenly */
  gap: 10px; /* Reduced gap between cards */
  padding: 0px; /* No padding for FlexWrap */
`;

const WorkoutCard = styled.div`
  width: 300px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px; /* Reduced gap inside cards */
  background-color: ${({ theme }) => theme.card_bg};
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
`;

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const WorkoutTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
`;

const WorkoutDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const TutorialsPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Workout Tutorials</Title>

        {/* Basic Workouts Section */}
        <Section>
          <WorkoutTitle>Basic Workouts</WorkoutTitle>
          <FlexWrap>
            <WorkoutCard>
              <WorkoutTitle>Push-Ups</WorkoutTitle>
              <WorkoutDescription>
                A great upper-body workout that targets the chest, shoulders, and triceps.
              </WorkoutDescription>
              <VideoWrapper>
                <Video 
                  src="https://www.youtube.com/embed/0pkjOk0EiAk" 
                  title="Push-Ups Tutorial" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                />
              </VideoWrapper>
            </WorkoutCard>

            <WorkoutCard>
              <WorkoutTitle>Bodyweight Squats</WorkoutTitle>
              <WorkoutDescription>
                Strengthens your legs, glutes, and core with no equipment required.
              </WorkoutDescription>
              <VideoWrapper>
                <Video 
                  src="https://www.youtube.com/embed/aclHkVaku9U" 
                  title="Squat Tutorial" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                />
              </VideoWrapper>
            </WorkoutCard>

            {/* Add more basic workout cards here */}
          </FlexWrap>
        </Section>

        {/* Advanced Workouts Section */}
        <Section>
          <WorkoutTitle>Advanced Workouts</WorkoutTitle>
          <FlexWrap>
            <WorkoutCard>
              <WorkoutTitle>Pistol Squats</WorkoutTitle>
              <WorkoutDescription>
                A challenging one-legged squat that improves strength, balance, and mobility.
              </WorkoutDescription>
              <VideoWrapper>
                <Video 
                  src="https://www.youtube.com/embed/vq5-vdgJc0I?si=ERuG5jZGbILsjB-6" 
                  title="Pistol Squat Tutorial" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                />
              </VideoWrapper>
            </WorkoutCard>

            <WorkoutCard>
              <WorkoutTitle>Handstand Push-Ups</WorkoutTitle>
              <WorkoutDescription>
                A powerful upper-body workout targeting shoulders and arms.
              </WorkoutDescription>
              <VideoWrapper>
                <Video 
                  src="https://www.youtube.com/embed/uZWjFe4fufA?si=nN7C2DtzOZ5PfhSb" 
                  title="Handstand Push-Ups Tutorial" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                />
              </VideoWrapper>
            </WorkoutCard>

            {/* Add more advanced workout cards here */}
          </FlexWrap>
        </Section>

        {/* Fitness Video Tutorials Section */}
        <Section>
          <WorkoutTitle>Video Tutorials</WorkoutTitle>
          <FlexWrap>
            <WorkoutCard>
              <WorkoutTitle>Full Body Workout</WorkoutTitle>
              <WorkoutDescription>
                A quick 20-minute workout that covers all major muscle groups.
              </WorkoutDescription>
              <VideoWrapper>
                <Video 
                  src="https://www.youtube.com/embed/MOrRRvSGIQc?si=i43fnUYnyLV1DCE-" 
                  title="Full Body Workout" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                />
              </VideoWrapper>
            </WorkoutCard>

            <WorkoutCard>
              <WorkoutTitle>HIIT Training</WorkoutTitle>
              <WorkoutDescription>
                A high-intensity interval workout to improve your cardio and endurance.
              </WorkoutDescription>
              <VideoWrapper>
                <Video 
                  src="https://www.youtube.com/embed/ml6cT4AZdqI" 
                  title="HIIT Training" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                />
              </VideoWrapper>
            </WorkoutCard>

            {/* Add more video tutorial cards here */}
          </FlexWrap>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default TutorialsPage;
