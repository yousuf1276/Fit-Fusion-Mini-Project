import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: hidden; /* Disable vertical scroll */
  overflow-x: auto; /* Enable horizontal scroll */
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
  flex-wrap: nowrap; /* Prevent wrapping */
  gap: 12px; /* Adjust gap between cards */
  padding: 0px 16px;
  overflow-x: auto; /* Allow horizontal scroll */
  @media (max-width: 600px) {
    gap: 8px;
  }
`;

const BlogCard = styled.div`
  flex: 0 0 300px; /* Set fixed width for each card */
  display: flex;
  flex-direction: column;
  padding: 22px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.card_bg};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const BlogTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
`;

const BlogSummary = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-bottom: 12px;
`;

const ReadMoreButton = styled.button`
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.button_bg};
  color: ${({ theme }) => theme.button_text};
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.button_hover};
  }
`;

const BlogPage = () => {
  const blogs = [
    {
      title: 'The Ultimate Guide to Strength Training',
      summary:
        'Strength training is one of the best ways to build muscle, increase endurance, and improve overall fitness. Learn the basics, the benefits, and the best practices to maximize your workouts.',
    },
    {
      title: '10 Tips to Improve Your Cardio Routine',
      summary:
        'Cardio is crucial for heart health, fat loss, and stamina. Discover 10 tips that will help you boost your cardiovascular training and see better results in less time.',
    },
    {
      title: 'Nutrition for Fitness: What You Should Eat',
      summary:
        'Your fitness routine is only as effective as your nutrition. Find out what foods will fuel your workouts and help you recover faster, with a focus on macronutrients and hydration.',
    },
    {
      title: 'Yoga for Flexibility and Strength',
      summary:
        'Yoga is not just about flexibility—it also builds strength and enhances balance. This blog covers the best yoga poses for both beginners and advanced practitioners to improve mobility and strength.',
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Title>Fitness Blogs</Title>
        <Section>
          {blogs.map((blog, index) => (
            <BlogCard key={index}>
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogSummary>{blog.summary}</BlogSummary>
              <ReadMoreButton>Read More</ReadMoreButton>
            </BlogCard>
          ))}
        </Section>
      </Wrapper>
    </Container>
  );
};

export default BlogPage;
