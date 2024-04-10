export interface IContainer {
  /**
   * The content or components to be rendered inside the container.
   * @type {React.ReactNode}
   */
  children: React.ReactNode;

  /**
   * Determines if the container should have a full width.
   * @type {boolean}
   */
  isFluid?: boolean;

  /**
   * Determines if the container should have no padding.
   * @type {boolean}
   */
  isNoPadding?: boolean;
}
