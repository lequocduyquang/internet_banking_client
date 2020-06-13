import { employeeRoutes, transactionRoutes } from '../../Routes/SideBarRoutes';

const Resource = (props) => {
  const { match } = props;
  // const employeeResource = employeeRoutes.items.find(
  //   ({ id }) => id === match.params.sidebarID,
  // );
  // const postResource = postRoutes.items.find(
  //   ({ id }) => id === match.params.sidebarID,
  // );

  const employeeResource =
    employeeRoutes.id === match.params.sidebarID ? employeeRoutes : null;

  const transactionResource =
    transactionRoutes.id === match.params.sidebarID ? transactionRoutes : null;

  // let ret = null;
  // if (employeeResource) {
  //   ret = employeeResource.component;
  // }
  // // } else if (postResource) {
  // //   ret = postResource.component;
  // // } else if (categoryResource) {
  // //   ret = categoryResource.component;
  // // }
  return employeeResource
    ? employeeResource.component
    : transactionResource.component;
};

export default Resource;
