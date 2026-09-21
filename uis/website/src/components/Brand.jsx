function Brand({ compact = false }) {
  return (
    <div className="brand-wrap">
      <div className={`brand-mark ${compact ? 'small' : ''}`}>T</div>
      <span>TrackFlow</span>
    </div>
  );
}

export default Brand;
