import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f5f9;
`;

export const LoginCard = styled.div`
  background: #fff;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  color: #023e8a;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #0077b6;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #023e8a;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;
