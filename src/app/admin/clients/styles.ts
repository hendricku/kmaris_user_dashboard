
import styled from '@emotion/styled';
import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${palette.white};
  padding: 2rem;
  border-radius: 12px;
  width: 500px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

export const ModalHeader = styled.div`
  display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
`;

export const ModalTitle = styled.h2`
    margin: 0;
    font-size: 24px;
    font-weight: ${typography.weight.semibold};
    color: ${palette.textDark};
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${palette.text};
`;

export const ModalBody = styled.div`
    margin-bottom: 1.5rem;
`;

export const FormGroup = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

export const FormLabel = styled.label<{ hasValue: boolean }>`
  position: absolute;
  left: 16px;
  color: ${palette.text};
  pointer-events: none;
  transform: ${(props) =>
    props.hasValue
      ? "translateY(-20px) scale(0.75)"
      : "translateY(12px)"};
  transform-origin: left;
  transition: all 0.2s ease-out;
  background: ${palette.white};
  padding: 0 4px;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${palette.border};
  border-radius: 8px;
  font-size: 14px;
  background-color: ${palette.white};
  color: ${palette.textDark};
  transition: all 0.3s ease;

  &:focus {
    border-color: ${palette.primary};
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
    outline: none;
  }

  &:focus + ${FormLabel} {
    transform: translateY(-20px) scale(0.75);
    color: ${palette.primary};
  }
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`;

export const Button = styled.button`
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: ${typography.weight.semibold};
    font-size: 14px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid ${palette.border};
  border-radius: 4px;
  font-size: 16px;
  background-color: ${palette.white};

  &:focus {
    border-color: ${palette.primary};
    outline: none;
  }
`;

export const StatusBadge = styled.span<{ status: string }>`
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: ${typography.weight.medium};
  text-transform: capitalize;

  ${({ status }) => {
    switch (status.toLowerCase()) {
      case "active":
      case "approved":
        return `background: #e6f7ed; color: #027a48;`;
      case "pending":
        return `background: #fff3e0; color: #b76e00;`;
      case "delayed":
      case "rejected":
        return `background: #ffebee; color: #c62828;`;
      default:
        return `background: #e9ecef; color: #495057;`;
    }
  }}
`;