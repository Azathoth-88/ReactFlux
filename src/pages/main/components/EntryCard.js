import { Card, Typography } from "@arco-design/web-react";
import LazyLoadingImage from "./LazyLoadingImage";
import { useStore } from "../../../store/Store";
import "./EntryCard.css";
import classNames from "classnames";
import { formatDate } from "../../../utils/formatDate";
import { IconStarFill } from "@arco-design/web-react/icon";

const { Meta } = Card;

const EntryCard = ({ entry }) => {
  const activeEntry = useStore((state) => state.activeEntry);
  const clickCard = useStore((state) => state.clickCard);

  const handelClickCard = (entry) => {
    clickCard(entry);
  };
  return (
    <Card
      hoverable
      className={classNames(
        "card-custom-hover-style",
        { selected: entry.id === activeEntry?.id },
        { read: entry.status === "card-read" },
      )}
      onClick={() => {
        handelClickCard(entry);
      }}
      style={{ width: "100%", marginBottom: "10px", cursor: "pointer" }}
      cover={
        entry.imgSrc ? (
          <div style={{ height: 140, overflow: "hidden" }}>
            <LazyLoadingImage
              alt={entry.title}
              src={entry.imgSrc}
              width="280px"
              height="140px"
              status={entry.status}
            />
          </div>
        ) : null
      }
    >
      <Meta
        title={null}
        description={
          <div style={{ color: "var(--color-text-3)", fontSize: "10px" }}>
            <Typography.Text
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color:
                  entry.status === "unread"
                    ? "var(--color-text-1)"
                    : "var(--color-text-3)",
              }}
            >
              {entry.title}
            </Typography.Text>
            <br />
            {entry.feed.title}
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {formatDate(entry.published_at)}
              {entry.starred && <IconStarFill />}
            </div>
          </div>
        }
      />
    </Card>
  );
};

export default EntryCard;