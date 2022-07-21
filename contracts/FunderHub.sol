// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract TheFundersHub {
    address[] public deployedStartUp;

    function createStartUp() public {
        address newStartup = address(new StartUp1());
        deployedStartUp.push(newStartup);
    }

    function getDeployedStartup() public view returns (address[] memory) {
        return deployedStartUp;
    }
}


contract StartUp1 {
  struct Request {
      string description;
      uint value;
      address recipient;
      bool complete;
      uint approvalCount;
      mapping(address => bool) approvals;
  }

  Request[] public requests;
  uint numRequest;
  address public manager;
  uint public emailContribution;
  string public StartUpName;
  string public StartUpDescription;
  string public fileUrl;
  uint public targetToAchieve;
  address[] public contributers;
  mapping(address => bool) public approvers;
  uint public approversCount;


  modifier restricted() {
      require(msg.sender == manager);
      _;
  }

  function StartUp( address creator,string memory name,string memory email,string memory description,string memory image,uint target) public {
      manager = creator;
      email = email;
      StartUpName=name;
      StartUpDescription=description;
      fileUrl=image;
      targetToAchieve=target;
  }


  function createRequest(string memory description, uint value, address recipient) public restricted {
      Request storage newRequest = requests[numRequest++];
         newRequest.description = description;
         newRequest.value= value;
         newRequest.recipient = recipient;
         newRequest.complete =false;
         newRequest.approvalCount= 0;
  }

  function approveRequest(uint index) public {
      require(approvers[msg.sender]);
      require(!requests[index].approvals[msg.sender]);

      requests[index].approvals[msg.sender] = true;
      requests[index].approvalCount++;
  }

  function finalizeRequest(uint index) public restricted{
      require(requests[index].approvalCount == (approversCount));
      require(!requests[index].complete);

      payable(requests[index].recipient).transfer(requests[index].value);
      requests[index].complete = true;

  }


    function getSummary() public view returns (uint,uint,uint,uint,address,string memory,string memory,string memory,uint) {
        return(
            emailContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager,
            StartUpName,
            StartUpDescription,
            fileUrl,
            targetToAchieve
          );
    }

    function getRequestsCount() public view returns (uint){
        return requests.length;
    }
}