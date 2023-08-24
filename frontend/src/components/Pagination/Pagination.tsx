import { useState } from "react";
import styles from "./Pagination.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type PaginationProps = {
  value: number;
  onChange: (value: number) => void;
  total: number;
  maxBulletNumber: number;
};

const Pagination = ({
  onChange,
  total,
  value,
  maxBulletNumber,
}: PaginationProps) => {
  const [offset, setOffset] = useState(value);

  return (
    <div className={styles.pagination}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        onClick={() =>
          setOffset((prev) =>
            prev - maxBulletNumber > 0 ? prev - maxBulletNumber : 1
          )
        }
        cursor="pointer"
      />
      {[...Array(maxBulletNumber)].map((_, index) => {
        const currentPage = offset + index;
        const isValidPage = currentPage > 0 && currentPage <= total;
        return (
          <div
            key={index}
            onClick={() => {
              if (!isValidPage) return;
              onChange(currentPage);
              setOffset(currentPage);
            }}
            style={{
              cursor: isValidPage ? "pointer" : "default",
            }}
            className={`page-bullet ${value === currentPage ? "active" : ""}`}
          >
            {isValidPage && currentPage}
          </div>
        );
      })}
      <FontAwesomeIcon
        icon={faChevronRight}
        onClick={() =>
          setOffset((prev) =>
            prev + maxBulletNumber <= total
              ? prev + maxBulletNumber
              : total - maxBulletNumber
          )
        }
        cursor="pointer"
      />
    </div>
  );
};

export default Pagination;
