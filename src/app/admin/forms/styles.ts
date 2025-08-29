import styled from '@emotion/styled';
import { typography } from '@/theme/typography';

export const StatusBadge = styled.span<{ status: string }>`
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: ${typography.weight.medium};
  text-transform: capitalize;

  ${({ status }) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'approved':
        return `background: #e6f7ed; color: #027a48;`;
      case 'pending':
        return `background: #fff3e0; color: #b76e00;`;
      case 'delayed':
      case 'rejected':
        return `background: #ffebee; color: #c62828;`;
      default:
        return `background: #e9ecef; color: #495057;`;
    }
  }}
`;