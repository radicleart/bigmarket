export const appDetails = {
	name: 'stxeco-zk-vote',
	icon: '/img/stx_eco_logo_icon_white.png'
};

export interface DaoConfig {
	VITE_DOA_DEPLOYER: string;
	VITE_DAO_BASE_CONTRACTS: string;
	VITE_DOA: string;
	VITE_DOA_PROPOSAL: string;
	VITE_DOA_SNAPSHOT_VOTING_EXTENSION: string;
	VITE_DOA_PROPOSAL_VOTING_EXTENSION: string;
	VITE_DOA_FUNDED_SUBMISSION_EXTENSION: string;
	VITE_DOA_EMERGENCY_EXECUTE_EXTENSION: string;
}

export const config_dao: { [key: string]: DaoConfig } = {
	devnet: {
		VITE_DOA_DEPLOYER: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
		VITE_DOA: 'bitcoin-dao',
		VITE_DAO_BASE_CONTRACTS: 'ecosystem-dao,bitcoin-dao',
		VITE_DOA_PROPOSAL: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bdp001-sip-021-test-01',
		VITE_DOA_SNAPSHOT_VOTING_EXTENSION: 'bde007-snapshot-proposal-voting',
		VITE_DOA_PROPOSAL_VOTING_EXTENSION: 'bde007-snapshot-proposal-voting',
		VITE_DOA_FUNDED_SUBMISSION_EXTENSION: 'bde002-proposal-submission',
		VITE_DOA_EMERGENCY_EXECUTE_EXTENSION: 'bde004-emergency-execute'
	},
	testnet: {
		VITE_DOA_DEPLOYER: 'SP3JP0N1ZXGASRJ0F7QAHWFPGTVK9T2XNXDB908Z',
		VITE_DAO_BASE_CONTRACTS: 'ecosystem-dao,bitcoin-dao',
		VITE_DOA: 'bitcoin-dao',
		VITE_DOA_PROPOSAL: 'SP3JP0N1ZXGASRJ0F7QAHWFPGTVK9T2XNXDB908Z.bdp001-sip-021-nakamoto',
		VITE_DOA_SNAPSHOT_VOTING_EXTENSION: 'bde007-snapshot-proposal-voting',
		VITE_DOA_PROPOSAL_VOTING_EXTENSION: 'bde007-snapshot-proposal-voting',
		VITE_DOA_FUNDED_SUBMISSION_EXTENSION: 'bde008-flexible-funded-submission',
		VITE_DOA_EMERGENCY_EXECUTE_EXTENSION: 'bde004-emergency-execute'
	},
	mainnet: {
		VITE_DOA_DEPLOYER: 'SP3JP0N1ZXGASRJ0F7QAHWFPGTVK9T2XNXDB908Z',
		VITE_DAO_BASE_CONTRACTS: 'ecosystem-dao,bitcoin-dao',
		VITE_DOA: 'bitcoin-dao',
		VITE_DOA_PROPOSAL: 'SP3JP0N1ZXGASRJ0F7QAHWFPGTVK9T2XNXDB908Z.bdp001-sip-021-nakamoto',
		VITE_DOA_SNAPSHOT_VOTING_EXTENSION: 'bde007-snapshot-proposal-voting',
		VITE_DOA_PROPOSAL_VOTING_EXTENSION: 'bde007-snapshot-proposal-voting',
		VITE_DOA_FUNDED_SUBMISSION_EXTENSION: 'bde008-flexible-funded-submission',
		VITE_DOA_EMERGENCY_EXECUTE_EXTENSION: 'bde004-emergency-execute'
	}
};
