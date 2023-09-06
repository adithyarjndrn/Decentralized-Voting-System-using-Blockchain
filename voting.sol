pragma solidity ^0.8.21;

contract Voting {
    struct Candidate {
        bytes32 name;
        uint numberofvotes;
    }

    struct Voter {
        bool voted;
        uint vote;
    }

    Candidate[] public candidates;
    mapping(address => Voter) public votes;

    address chairPerson;

    constructor() {
        chairPerson = msg.sender;

        candidates.push(Candidate({
            name: 'Coke',
            numberofvotes: 0
        }));
        candidates.push(Candidate({
            name: 'Pepsi',
            numberofvotes: 0
        }));
    }

    function castVote(uint candidateIndex) public {
        address sender = msg.sender;
        require(!votes[sender].voted, 'Voter has already voted');
        require(candidateIndex < candidates.length, 'Invalid candidate index');
        
        candidates[candidateIndex].numberofvotes += 1;
        votes[sender].voted = true;
        votes[sender].vote = candidateIndex;
    }

    function getNumberOfVotes(uint candidateIndex) public view returns (uint) {
        require(candidateIndex < candidates.length, 'Invalid candidate index');
        return candidates[candidateIndex].numberofvotes;
    }

    function getWinner() public view returns (bytes32 winner) {
        uint max = 0;
        uint length = candidates.length;

        for (uint i = 0; i < length; i++) {
            if (candidates[i].numberofvotes > max) {
                max = candidates[i].numberofvotes;
                winner = candidates[i].name;
            }
        }
    }
}
