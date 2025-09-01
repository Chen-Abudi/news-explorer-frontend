const MobileNavigationOverlay = (props) => {
  if (props.mobileWidth) {
    return <div className="header__navigation-overlay">{props.children}</div>;
  }
  return props.children;
};

export default MobileNavigationOverlay;
